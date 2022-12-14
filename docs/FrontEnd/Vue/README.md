---
title: Vue.js
---

<br><p style="font-size: 32px; font-weight: bold;">目录</p>

- [vite 初体验](ShoppingCart.demo.md)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [创建](#创建)
  - [引用 vue.js 文件](#引用-vuejs-文件)
  - [Vue 项目](#vue-项目)
    - [构建项目 vue-cli](#构建项目-vue-cli)
    - [运行](#运行)
- [基本语法](#基本语法)
  - [模板语法与指令](#模板语法与指令)
  - [事件绑定](#事件绑定)
  - [表单输入绑定](#表单输入绑定)
  - [生命周期](#生命周期)
  - [响应式数据](#响应式数据)
  - [监听数据](#监听数据)
  - [数据的计算](#数据的计算)
- [路由](#路由)
  - [引入路由与配置](#引入路由与配置)
  - [路由的跳转](#路由的跳转)
- [多组件](#多组件)
  - [引入](#引入)
  - [组件之间的通信](#组件之间的通信)
    - [父子组件之间](#父子组件之间)
- [Store](#store)

<!-- /code_chunk_output -->

<br>

## 创建

### 引用 vue.js 文件

- 直接引用文件或是 cdn：`https://unpkg.com/vue@next`

  ```js {.line-numbers}
  <div id="app">{{}}</div>;

  const app = {
    data() {
      return {}; //返回对象
    },
    // 函数方法
    methods: {},
  };
  Vue.createApp(app).mount('#app'); //要挂载的HTML的元素

  //或：
  const app = Vue.createApp({
    data() {
      return {};
    },
  });
  const vm = app.mount('#app');
  ```

- `data` 选项是一个函数。Vue 在创建新组件实例的过程中调用此函数。它应该**返回一个对象**，然后 Vue 会通过响应性系统将其包裹起来，并以 `$data` 的形式存储在组件实例中
- `mount()` 挂载应用：应用实例必须在调用了 `.mount()` 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串

<br>

### Vue 项目

#### 构建项目 vue-cli

- 如果没安装，先安装 `vue-cli` 脚手架
  ```shell {.line-numbers}
  npm install -g @vue/cli
  ```
- 再创建项目

  ```shell {.line-numbers}
  vue create [options] app-name

  cd app-name
  npm run server
  ```

- 或用 GUI 来创建
  ```shell {.line-numbers}
  vue ui
  ```
- 项目文件结构
<div class="img" align="center"><img src="./img/Vue_proj.png"/><p>
  文件结构
</p></div>

#### 运行

<div class="h5">入口：</div>

使用 Vue 3 的生命周期的情况下，整个组件相关的业务代码，都可以丢到 `setup` 里编写。因为在 setup 之后，其他的生命周期才会被启用

<div class="h5">基本语法：</div>

```ts {.line-numbers}
import { defineComponent } from 'vue';
// defineComponent 可以用于 TypeScript 的类型推导，简化掉很多编写过程中的类型定义
export default defineComponent({
  setup(props, context) {
    // 业务代码写这里...
    return {
      // 需要给 template 用的数据、函数放这里 return 出去...
    };
  },
});
```

- 使用 `setup` 的情况下，请牢记一点：不能再用 `this` 来获取 Vue 实例，也就是无法通过 `this.xxx` 、 `this.fn()` 这样来获取实例上的数据，或者执行实例上的方法
- 在 Vue 3 的 `defineComponent` 写法里，只要你的数据要在 `<template>` 中使用，就必须在 `setup` 里 `return` 出去

> 当然，只在函数中调用到，而不需要渲染到模板里的，则无需 return

- **而在新 Vue3.2：** 中的语法糖，直接在 `script` 标签中插入 `stup`，就不用 `return` 回去了，同时，脚本的变量什么的都可以被 `<template>` 获取

  ```html {.line-numbers}
  <script setup>
    const msg = 'Hello!';
    function log() {
      console.log(msg);
    }
  </script>

  <template>
    <div @click="log">{{ msg }}</div>
  </template>
  ```

<br>

## 基本语法

可以理解为 客户端的 HTML 元素是要先经过服务端渲染(编译) `Vue.js` 后才呈现的，所以客户端并不会显示 Vue 的内容

### 模板语法与指令

**文本插值**：`{{...}}` 标签的内容将会被替代为对应组件实例中 `message` 属性的值，如果 `message` 属性的值发生了改变，`{{...}}` 标签内容也会更新

**指令：** 以 `v-*`为格式的 attribute 被称为一个 Vue 指令，用来操作 DOM

- `v-html=""`： 转译输出 HTML 标签
  ```html {.line-numbers}
  <span v-html="rawHtml"></span>
  <script>
    return {
      rawHtml: '<span style="color:red">mie</span>',
    };
  </script>
  ```
- `v-bind:属性名=""`，如 `:id="dynId"` | `:href="url"`，实现动态的属性值
  - 绑定**多类型**时用对象：
    ```html {.line-numbers}
    <div v-bind="obj"></div>
    <script>
      return {
        obj: {
          id: 'mie',
          class: 'haha btns',
        },
      };
    </script>
    ```
  - 还能使用 js 表达式 (而不是语句)：
    ```html {.line-numbers}
    <div :id="`list-${ids}`"></div>
    <!-- return {ids: xxx} -->
    ```
  - 当绑定 class 为对象时，根据 value 的**布尔值**决定是否带有该 key
    ```html {.line-numbers}
    <div :class="classObj"></div>
    <script>
      return {
        classObj: {
          active: true,
          err: false,
        },
      };
    </script>
    <!-- 最终的结果是 <div class="active"></div> -->
    ```
- `v-if=""`：根据返回的布尔值来决定该元素是否展示 —— false 时直接就变成了注释 `<!-- -->`
  - 也有 `v-if-else=""` 和 `v-else=""`
- `v-show=""`：同上，但 false 时是 `display:none`
- `v-on=""`：监听 DOM 事件，简写：`<p @click="fun"></p>`
- `v-for="(ele, index) in items"`：循环渲染，相当于是 `forEach`
  - 也能改为 `of`
  - 但为了避免重复渲染，要加属性：`:key="index"`
  - 循环对象时：
    ```html {.line-numbers}
    <li v-for="(value, key, index) in items">
      {{key}}: {{value}}, index: {{index}}
    </li>
    ```
  - 循环范围：
    ```html {.line-numbers}
    <li v-for="n in x">{{n}}</li>
    ```
- `:style`：传对象插入样式，多个时传对象数组
  ```html {.line-numbers}
  <p
    :style="{
      fontSize: '13px', //直接用的话要用小驼峰命名
      'line-height': 2, //不然就单引号括起来
      color: '#ff0000',
      textAlign: 'center'
    }"
  >
    Hello World!
  </p>
  ```

### 事件绑定

通过由点 `.` 表示的指令后缀来调用修饰符:

- `.stop` - 阻止冒泡
- `.prevent` - 阻止默认事件
- `.capture` - 阻止捕获
- `.self` - 只监听触发该元素的事件
- `.once` - 只触发一次
- `.left` - 左键事件
- `.right` - 右键事件
- `.middle` - 中间滚轮事件

### 表单输入绑定

`<input v-model="text">`

`v-model` 还可以用于各种不同类型的输入。它会根据所使用的元素自动扩展到不同的 DOM 属性和事件组合：

- 文本类型的 `<input>` 和 `<textarea>` 元素会使用到 `value` 属性和 `input` 事件；
- `<input type="checkbox">` 和 `<input type="radio">` 使用 `checked` 属性和 `change` 事件；
- `<select>` 使用的 `value` 作为 ` prop`，`change ` 作为事件
  &emsp;&emsp;

<div class="h5">文本：</div>

```html {.line-numbers}
<span>
  <input v-model="mes" />
  mes is {{mes}}
</span>
```

**复选框：** `checkedNames` 数组将始终包含来自当前选中框的值

```html {.line-numbers}
<div>Checked names: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames" />
<label for="john">John</label>
<script>
  return {
    checkedNames: [],
  };
</script>
```

<div class="h5">下拉框：</div>

```html {.line-numbers}
<p>Selected: {{ selected }}</p>
<span>选项：</span>
<select v-model="selected">
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>
```

### 生命周期

- `setup()` : 开始创建组件之前，在 `beforeCreate` 和 `created` 之前执行，创建的是 `data` 和 `method`
- `onBeforeMount()` : 组件挂载到节点上之前执行的函数；
- `onMounted()` : 组件挂载完成后执行的函数；
- `onBeforeUpdate()`: 组件更新之前执行的函数；
- `onUpdated()`: 组件更新完成之后执行的函数；
- `onBeforeUnmount()`: 组件卸载之前执行的函数；
- `onUnmounted()`: 组件卸载完成后执行的函数；
- `onActivated()`: 被包含在 `<keep-alive>` 中的组件，会多出两个生命周期钩子函数，被激活时执行；
- `onDeactivated()`: 比如从 A 组件，切换到 B 组件，A 组件消失时执行；
- `onErrorCaptured()`: 当捕获一个来自子孙组件的异常时激活钩子函数

> PS： 使用`<keep-alive>` 组件会将数据保留在内存中，比如我们不想每次看到一个页面都重新加载数据，就可以使用`<keep-alive>` 组件解决
> 在 Vue3 里， 每个生命周期函数都要先导入才可以使用，并且所有生命周期函数统一放在 `setup` 里运行

### 响应式数据

从返回的数据实时更新

- **ref：** 但是在使用 `ref` 时，不能这样子声明，会报错，正确的声明方式应该是使用 `<>` 来包裹类型定义，紧跟在 `ref API` 之后：
  ```ts {.line-numbers}
  // 单类型
  const msg = ref<string>('Hello World!');
  // 多类型
  const phoneNumber = ref<number | string>(13800138000);
  // 数字数组
  const uids = ref<number[]>([1, 2, 3]);
  ```
  **但是：**
  - 定义**挂载节点**后，也是必须通过 `xxx.value` 才能正确操作到挂载的 `DOM` 元素或组件（详见下方的变量的读取与赋值）
  - 请保证视图渲染完毕后，再执行 DOM 或组件的相关操作，需要放到生命周期的 `onMounted` 或者 `nextTick` 函数里
  - 该变量必须 `return` 出去才可以给到 `template` 使用（这一点是 3.x 生命周期的硬性要求，子组件的数据和方法如果要给父组件操作，也要 return 出来才可以）
  - 当变量是 DOM 时，类型应该是 [HTML 元素](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model#html_%E5%85%83%E7%B4%A0%E6%8E%A5%E5%8F%A3)
  - 读取任何 ref 对象的值都**必须**通过 `xxx.value` 才可以正确获取到

<br>

- **reactive:** `reactive` 是继 `ref` 之后最常用的一个响应式 API 了，相对于 `ref`，它的局限性在于只适合对象、数组
  定义和使用与 ref 差不多，**但：**
  - 在 2.x 的时候，在操作数组时，完全可以和普通数组那样随意的处理数据的变化，依然能够保持响应性
  - 但在 3.x ，如果使用 `reactive` 定义数组，则不能这么搞了，必须只使用那些不会改变引用地址的操作

<br>

- **所以：** 为了使用方便的同时又能响应式修改数据，就有了：

  - `toRef` 创建一个新的 `ref` 变量，转换 `reactive` 对象的某个字段为 `ref` 变量

    - 在 `toRef` 的过程中，如果使用了原对象上面不存在的 `key` ，那么定义出来的变量的 `value` 将会是 `undefined` 
      如果你对这个不存在的 `key` 的 `ref` 变量，进行了 `value` 赋值，那么原来的对象也会同步增加这个 `key`，其值也会同步更新

  - `toRefs` 创建一个新的对象，它的每个字段都是 `reactive` 对象各个字段的 `ref` 变量。本身是个普通对象，但是它的每个字段，都是与原来关联的 `ref` 变量

> 一般是，先用 `ref` 定义一个响应式数据，再转为 `reactive` 进行使用

### 监听数据

监听数据变化也是组件里的一项重要工作，比如监听路由变化、监听参数变化等等

- **语法：**
  ```ts {.line-numbers}
  import { watch } from 'vue';
  watch(
    source, // 必传，要监听的数据源
    callback // 必传，监听到变化后要执行的回调函数
    // options // 可选，一些监听选项
  );
  ```
- **监听的数据源源：**
  要想定义的 `watch` 能够做出预期的行为，数据源必须具备**响应性**或者是一个 **`getter`** ，如果只是通过 `let` 定义一个普通变量，然后去改变这个变量的值，这样是无法监听的
  - `getter`函数：
    ```ts {.line-numbers}
    () => userInfo.name     // 只监听 name 的变化
    () => ({ ...userInfo }) // 监听整个对象的变化
    ```
- **监听的回调函数：**
  ```ts {.line-numbers}
  // 参数：
  (newValue, oldValue) => {
    console.log('打印变化前后的值', { oldValue, newValue });
  };
  ```
- **批量监听：**
  ```ts {.line-numbers}
  watch(
    // 数据源改成了数组
    [message, index],
    // 回调的入参也变成了数组，每个数组里面的顺序和数据源数组排序一致
    ([newMessage, newIndex], [oldMessage, oldIndex]) => {
      console.log('message 的变化', { newMessage, oldMessage });
      console.log('index 的变化', { newIndex, oldIndex });
    }
  );
  ```
- **监听的选项：** 传入一个对象

  <table><thead><tr><th >选项</th><th >类型</th><th >默认值</th><th >可选值</th><th >作用</th></tr></thead><tbody><tr><td >deep</td><td >boolean</td><td >false</td><td >true | false</td><td >是否进行深度监听</td></tr><tr><td >immediate</td><td >boolean</td><td >false</td><td >true | false</td><td >是否立即执行监听回调</td></tr><tr><td >flush</td><td >string</td><td >'pre'</td><td >'pre' | 'post' | 'sync'</td><td >控制监听回调的调用时机</td></tr><tr><td >onTrack</td><td >(e) =&gt; void</td><td ></td><td ></td><td >在数据源被追踪时调用</td></tr><tr><td >onTrigger</td><td >(e) =&gt; void</td><td ></td><td ></td><td >在监听回调被触发时调用</td></tr></tbody></table>

  - `deep`： `deep` 选项接受一个布尔值，可以设置为 `true` 开启深度监听，或者是 `false` 关闭深度监听，默认情况下这个选项是 `false` 关闭深度监听的，但也存在特例 (`reactive`)
    设置为 `false` 的情况下，如果直接监听一个响应式的 **引用类型** 数据（e.g. `Object` 、 `Array` … ），虽然它的属性的值有变化，但对其本身来说是不变的，所以不会触发 `watch` 的 `callback` 。这时候要手动启用 `deep`

- **watchEffect：** 传入一个回调函数
  - 和 `watch` 的区别 —— 虽然理论上 `watchEffect` 是 `watch` 的一个简化操作，可以用来代替 **批量监听** ，但它们也有一定的区别：
    - `watch` 可以访问侦听状态变化前后的值，而 `watchEffect` 没有
    - `watch` 是在属性改变的时候才执行，而 `watchEffect` 则默认会执行一次，然后在属性改变的时候也会执行
      也就是：(被监听的数据)初定义执行，变化时执行
    - 而且不支持 `deep` 和 `immediate`
  - 同时，操作 `reactive` 的引用类型的数据时，要转换下：`{ ...userInfo }`

### 数据的计算

只要原始数据没有发生改变，多次访问 `computed` ，都是会立即返回之前的计算结果，而不是再次执行函数；而普通的 function 调用多少次就执行多少次，每调用一次就计算一次

- **用法：**
  ```ts {.line-numbers}
  const fullName = computed(() => `${name1.value} ${name2.value}`);
  ```
- **取值：**
  - 定义出来的 `computed` 变量，和 `ref` 变量的用法一样，也是需要通过 `.value` 才能拿到它的值
  - 但是区别在于， `computed` 的 `value` 是只读的
- **但：** 只会更新响应式数据的计算
  假设要获取当前的时间信息，因为*不是*响应式数据，所以这种情况下就需要用普通的*函数*去获取返回值，才能拿到最新的时间
- 而要**改变**时：使用 `setter` 函数
  ```ts {.line-numbers}
  const fullName = computed({
    // getter我们还是返回一个拼接起来的全名
    get() {
      return `${firstName.value} ${lastName.value}`;
    },
    // setter这里我们改成只更新firstName，注意参数也定义TS类型
    set(newFirstName: string) {
      firstName.value = newFirstName;
    },
  });
  ```
  **而且：** `computed` 只支持 `get()` 和 `set()` 函数

## 路由

像 Vue 工程，可以通过配置一个生态组件，来实现只用一个 html ，却能够完成多个站内页面渲染、跳转的功能。这个生态组件，就是**路由**

### 引入路由与配置

```ts {.line-numbers}
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 路由树的配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home', // 访问的路径就是 domain/home
    component: () => import(/* webpackChunkName: "home" */ '@views/home.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

### 路由的跳转

```html {.line-numbers}
<!-- 解析成 <a href="/home"></a> -->
<router-link to="/home">首页</router-link>
<router-link :to="{ path: '/home' }">Home</router-link>
<router-link :to="{ name: 'home' }">User</router-link>

<!-- 带查询参数，下面的结果为 `/register?plan=private` -->
<router-link :to="{ path: '/register', query: { plan: 'private' }}">
  Register
</router-link>
```

## 多组件

思想上是将页面（或要复用的区域）划分为多个组件，每个区域就是一个组件单元

### 引入

```html {.line-numbers}
<!-- app.vue -->
<template>
  <fish-bar></fish-bar>
</template>

<script setup>
  import FishBar from 'cp/FishBar/index.vue';
</script>

<!-- FishBar/index.vue -->
<template>
  <h1>This is fish-bar</h1>
</template>
```

### 组件之间的通信

通信是指组之间的数据联系

#### 父子组件之间

- 通常的方法有：
  <table><thead><tr><th >方案</th><th >父组件向子组件</th><th >子组件向父组件</th></tr></thead><tbody><tr><td >props / emits</td><td >props</td><td >emits</td></tr><tr><td >v-model / emits</td><td >v-model</td><td >emits</td></tr><tr><td >ref / emits</td><td >ref</td><td >emits</td></tr><tr><td >provide / inject</td><td >provide</td><td >inject</td></tr><tr><td >EventBus</td><td >emit / on</td><td >emit / on</td></tr><tr><td >Vuex</td><td >-</td><td >-</td></tr></tbody></table>

- `props` / `emits`：这是 Vue 跨组件通信最常用，也是基础的一个方案，它的通信过程是：
  - `Father.vue` 通过 `prop` 向 `Child.vue` 传值（可包含父级定义好的函数）
  - `Child.vue` 通过 `emit` 向 `Father.vue` 触发父组件的事件执行

## Store
