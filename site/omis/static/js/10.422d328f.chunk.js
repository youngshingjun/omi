webpackJsonp([10],{48:function(e,n){e.exports="## Ref\n\nRef provides a way to access DOM nodes or Components created in render methods.\n\n```jsx\nconst HelloMessage = (props, store, _) => {\n  return h('h1', { ref: ele => _.h1 = ele }, `Hello ${props.name}`)\n}\n\nHelloMessage.store = _ => {\n  return {\n    installed() {\n      //h1 dom element\n      console.log(_.h1)\n    }\n  }\n}\n```\n"}});
//# sourceMappingURL=10.422d328f.chunk.js.map