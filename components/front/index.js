Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    currentSelectType: {
      type: String,
      value: "front"
    },
    currentContent: {
      type: Array,
      value: [
        {
          title: "小程序新入门手教程",
          content:
            "首先，是微信小程序开发的技术要求。你得要有html、js、CSS的基础，最好还有现在流行前端JS框架（比如ng-js、vuejs、reactjs等）的一些基础，那样子在微信平台开发，你会感觉事半功倍。",
          viewNum: 163,
          praiseNum: 89,
          commentNum: 30
        },
        {
          title: "解惑 spring 嵌套事务",
          content:
            "数据库系统必须维护事务的以下特性(简称ACID)： 原子性(Atomicity)  一致性(Consistency) 隔离性(Isolation) 持久性(Durability)",
          viewNum: 148,
          praiseNum: 125,
          commentNum: 30
        },
        {
          title: "解惑 spring 嵌套事务",
          content:
            "数据库系统必须维护事务的以下特性(简称ACID)： 原子性(Atomicity)  一致性(Consistency) 隔离性(Isolation) 持久性(Durability)",
          viewNum: 148,
          praiseNum: 125,
          commentNum: 30
        },
        {
          title: "解惑 spring 嵌套事务",
          content:
            "数据库系统必须维护事务的以下特性(简称ACID)： 原子性(Atomicity)  一致性(Consistency) 隔离性(Isolation) 持久性(Durability)",
          viewNum: 148,
          praiseNum: 125,
          commentNum: 30
        },
        {
          title: "解惑 spring 嵌套事务",
          content:
            "数据库系统必须维护事务的以下特性(简称ACID)： 原子性(Atomicity)  一致性(Consistency) 隔离性(Isolation) 持久性(Durability)",
          viewNum: 148,
          praiseNum: 125,
          commentNum: 30
        }
      ]
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    tabSwitch(e) {
      console.log(e, "child");
    }
  }
});
