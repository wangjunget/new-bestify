<template>
  <div class="upload-mult">
    <button @click="chooseFile">上传文件</button>
    <span class="upload-tip">单个文件不超过20M，最多上传5个</span>
    <input :multiple="multiple" type="file" class="upload-button" ref="file" @change="addFile" />
    <ul class="file-list">
      <transition-group name="list">
        <li v-for="(item,index) in fileList" :key="index" @click="handlePreview(item)">
          <span>{{item.name}}</span>
          <span class="el-icon-circle-check success icon"></span>
          <span class="el-icon-circle-close delete icon" @click.stop="deleteFile(item,index)"></span>
        </li>
      </transition-group>
    </ul>
  </div>
</template>
<script>
function noop() {}
import httpRequest from "./ajax";
export default {
  name: "NbUpload",
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
            "dbxt:DBAdminSysSrv:dev:new:token:954540fda2c2482c98856687f80c1ca6"
        };
      }
    },
    //default  正常可上传多个文件显示文件列表  single  单个文件替换
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
      default: false
    },
    unique: {
      type: Boolean,
      default: false
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    accept: String,
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
      prograss: 0
    };
  },
  methods: {
    chooseFile() {
      if (this.isLoading) return;
      this.$refs.file.value = "";
      this.$refs.file.click();
    },
    addFile(e) {
      e.target.files.forEach(item => {
        item.status = "ready";
        item.url = window.URL.createObjectURL(item);
        this.fileList.push(item);
      });
      if (this.autoUpload) {
        this.upload(e.target.files);
      }
    },
    deleteFile(item, index) {
      this.fileList.splice(index, 1);
    },
    upload(files) {
      console.log(this);
      let index = 0;
      const options = {
        headers: this.headers,
        file: files[index],
        data: this.data,
        type: "db/other",
        filename: files[index].name,
        action: this.action,
        onProgress: e => {
          this.onProgress(e, files[index]);
        },
        onSuccess: res => {
          this.onSuccess(res, files[index]);
        },
        onError: err => {
          this.onError(err, files[index]);
        }
      };
      httpRequest(options).then(res => {});
    },
    handlePreview(file) {
      if (!file.url) return;
      let ext = this.getExt(file.name);
      if (ext == "jpg" || ext == "png" || ext == "pdf") {
        window.open(file.url);
      } else {
        let downloadElement = document.createElement("a");
        downloadElement.setAttribute("href", file.url);
        document.body.appendChild(downloadElement);
        downloadElement.click();
        document.body.removeChild(downloadElement);
        return false;
      }
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
<style lang='scss'>
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.upload-tip {
  color: #999;
  margin-left: 10px;
}
.upload-button {
  display: none;
}
.file-list {
  list-style: none;
  margin: 0;
  padding: 0;
  .delete {
    display: none;
  }
  li {
    display: flex;
    align-items: center;
    height: 30px;
    margin: 10px 0;
    width: 400px;
    position: relative;
    padding: 0 3px;
    transition: all 0.2s;
    cursor: pointer;
    .icon {
      position: absolute;
      right: 0;
    }
  }
  li:hover {
    color: #11b0ff;
    background: #eee;
    .delete {
      display: block;
    }
    .success {
      display: none;
    }
  }
}
.el-icon-circle-check {
  color: #67c23a;
}
.el-icon-circle-close {
  color: red;
}
</style>