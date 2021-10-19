<script setup lang="ts">
// import { ipcRenderer } from "electron";

// class Ajax {
//   static xhr = new XMLHttpRequest()
//
//   request (): Promise<any> {
//     return new Promise((resolve) => {
//       Ajax.xhr.onreadystatechange = function () {
//         if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//           let result = this.responseText
//           if (/^{.*}$/.test(this.responseText)) {
//             result = JSON.parse(this.responseText)
//           }
//           resolve(result)
//         }
//       }
//     })
//   }
//
//   get (url: string) {
//     Ajax.xhr.open('GET', url)
//     Ajax.xhr.send()
//     return this.request()
//   }
//
//   post (url: string, params: Record<string, any>) {
//     Ajax.xhr.open('POST', url)
//     Ajax.xhr.setRequestHeader('Content-Type', 'application/json')
//     Ajax.xhr.send(params)
//     return this.request()
//   }
// }
//
// const ajax = new Ajax()



const login = () => {
  // const xhr = new XMLHttpRequest()
  //
  // xhr.open('GET', 'http://localhost:9000')
  // xhr.send()
  // xhr.onload = function () {
  //   console.log(this.responseText)
  // }
  // ajax.get('http://localhost:9000')
  //   .then(res => {
  //     console.log(res)
  //   })
  // .catch(err => {
  //   console.log('err', err)
  // })

  window.require('electron').ipcRenderer.invoke('async-message', {
    func: 'search',
    params: {
      keywords: '海阔天空'
    }
  }).then(res => {
    console.log(res)
  })
}
</script>

<template lang="pug">
button(@click="login") 登录
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
