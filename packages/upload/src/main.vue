<template>
  <div class="upload-mult">
    <div class="upload-list" v-if="type == 'default'">
      <nb-button @click="chooseFile" text="上传文件" type="primary" />
      <span class="upload-tip">{{tip}}</span>
      <ul class="file-list">
        <template v-for="(item,index) in fileList">
          <transition :key="index+'l'" name="fade">
            <li :key="index" @click="handlePreview(item)">
              <span>{{item.name}}</span>
              <span class="upload-icon-wrap">
                <span class="nb-icon success" v-if="item.status == 'success'"></span>
                <span class="nb-icon close" @click.stop="deleteFile(item,index)"></span>
              </span>
            </li>
          </transition>
          <transition :key="index+'f'" name="fade">
            <nb-prograss :value="item.percent" v-if="item.percent > 0 && item.status != 'success'" />
          </transition>
        </template>
      </ul>
    </div>
    <div class="upload-album" v-if="type == 'album'">
      <ul class="upload-album-list">
        <li class="upload-album-list__add" @click="chooseFile">+</li>
        <li v-for="(item,index) in fileList" :key="item.uid">
          <img class="upload-album-list__img" :src="item.url" />
          <nb-prograss
            :value="item.percent"
            v-if="item.percent > 0 && item.status != 'success'"
            type="circle"
            :width="120"
          />
          <span></span>
          <div class="upload-album-list__mask">
            <span @click="showPreviewList">+</span>
            <span @click.stop="deleteFile(item,index)">-</span>
          </div>
        </li>
      </ul>
    </div>
    <image-viewer
      v-if="isShowPreviewList"
      :onClose="hidePreview"
      :previewList="previewList"
      :src="activeSrc"
    ></image-viewer>
    <input
      :multiple="isMultiple"
      type="file"
      class="upload-button"
      ref="file"
      @change="addFile"
      :accept="acceptType"
    />
  </div>
</template>
<script>
function noop() {}
import httpRequest from "./ajax";
import Guid from "guid";
import Prograss from "../../prograss/src/main";
import Button from "../../button/src/main";
import Imageviewer from "../../image/src/image-preview";
export default {
  name: "NbUpload",
  components: {
    [Prograss.name]: Prograss,
    [Button.name]: Button,
    Imageviewer
  },
  props: {
    action: {
      type: String,
      default: "",
      required: true
    },
    //额外参数
    data: {
      type: Object,
      default: () => {}
    },
    //额外请求头信息
    headers: {
      type: Object,
      default: () => {
        return {
          token:
            "dbxt:DBAdminSysSrv:dev:new:token:3049fcb0e919458fba8cb671abf59c57"
        };
      }
    },
    //list：正常可上传多个文件显示文件列表   album：图片集
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      //是否禁用
      type: Boolean,
      default: false
    },
    fileLimit: {
      //上传最大数量
      type: Number,
      default: 1
    },
    multiple: {
      //是否可多选
      type: Boolean,
      default: true
    },
    isUnique: {
      type: Boolean,
      default: false
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    accept: String,
    tip: {
      type: String,
      default: "单选状态"
    },
    onSuccess: {
      type: Function,
      default: noop
    },
    onProgress: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    }
  },
  data() {
    return {
      fileList: [],
      isLoading: false,
      isShowPreviewList: false,
      activeSrc: ""
    };
  },
  computed: {
    isMultiple() {
      return this.multiple && !this.isUnique;
    },
    acceptType() {
      return this.type == "album" ? ".jpg,.jpeg,.png,.gif" : this.accept;
    },
    previewList() {
      return this.fileList.map(item => item.url);
    }
  },
  methods: {
    chooseFile() {
      if (this.isLoading) return;
      this.$refs.file.value = "";
      this.$refs.file.click();
    },
    addFile(e) {
      if (this.isUnique) {
        this.multiple = false;
        this.fileList = [];
      }
      e.target.files.forEach(item => {
        var guid = Guid.create().value;
        let file = {};
        file.uid = guid;
        file.status = "ready";
        file.url = window.URL.createObjectURL(item);
        file.file = item;
        file.name = item.name;
        file.percent = 0;
        this.fileList.push(file);
      });
      if (this.autoUpload) {
        this.upload();
      }
    },
    deleteFile(item, index) {
      this.fileList.splice(index, 1);
    },
    upload() {
      let readyList = this.fileList.filter(item => item.status == "ready");
      let index = 0;
      upload.apply(this);
      function upload() {
        this.isLoading = true;
        let fileIndex = this.fileList.indexOf(readyList[index]);
        const options = {
          headers: this.headers,
          file: readyList[index].file,
          data: this.data,
          type: "db/other",
          filename: readyList[index].name,
          action: this.action,
          onProgress: e => {
            this.fileList[fileIndex].percent = parseInt(e.percent);
            this.onProgress(e, readyList[index]);
          },
          onSuccess: res => {
            this.isLoading = false;
            this.fileList[fileIndex].status = "success";
            this.fileList[fileIndex].url = res.obj.url;

            if (index >= readyList.length - 1) {
              this.onSuccess(this.fileList);
            } else {
              index++;
              upload.apply(this);
            }
          },
          onError: err => {
            this.onError(err, readyList[index]);
          }
        };
        httpRequest(options).then(res => {});
      }
    },
    showPreviewList() {
      this.isShowPreviewList = true;
    },
    hidePreview() {
      this.isShowPreviewList = false;
    },
    getExt(name) {
      if (!name) return;
      let ext = name.substring(name.lastIndexOf(".") + 1);
      ext = ext.toLowerCase();
      return ext;
    }
  }
};
</script>
<style lang='scss' src="../../../theme/upload.scss">
</style>