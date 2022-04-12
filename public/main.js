//添加监听
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response); //把 JSON 字符串变成 JS 数组
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const object = JSON.parse(request.response); //符合JSON语法的字符串变成对应的对象或其他
        myName.textContent = object.name;
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        console.log("加载 XML 失败");
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  //1.创建 XMLHttpRequest 对象
  const request = new XMLHttpRequest();
  //2.调用对象的 open 方法：获取资源的 method 都用get,获取文件路径
  request.open("GET", "/3.html");
  //3.监听对象的 onload & onerror 事件
  request.onload = () => {
    //（1）创建一个 div
    const div = document.createElement("div");
    //（2）给 div 添加内容
    div.innerHTML = request.response;
    //（3）把 div 插到 body 中
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  //4.调用对象的 send() 方法
  request.send();
};

getJS.onclick = () => {
  //1.创建 XMLHttpResponse 对象
  const request = new XMLHttpRequest();
  //调用对象的 open 方法：获取资源 method 都用get,获取文件路径
  request.open("GET", "/2.js");
  //3.监听对象的 onload & onerror 事件
  request.onload = () => {
    //（1）创建 script 标签
    const script = document.createElement("script");
    //（2）填写 script 内容,内容为请求到的 response
    script.innerHTML = request.response;
    //（3）插入到 body 里
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  //4.调用对象的 send() 方法
  request.send();
};

getCSS.onclick = () => {
  //1.创建 XMLHttpRequest 对象
  const request = new XMLHttpRequest();
  //2.调用对象的 open 方法：获取资源 method 都用get,获取文件路径
  request.open("GET", "/style.css");
  //3.使用 onreadystatechange
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //（1）创建 style 标签
        const style = document.createElement("style");
        //（2）填写 style 内容
        style.innerHTML = request.response;
        //（3）插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
      //console.log(request.status); //响应的状态
    }
  };
  //   //3.监听对象的 onload & onerror 事件
  //   request.onload = () => {
  //     //（1）创建 style 标签
  //     const style = document.createElement("style");
  //     //（2）填写 style 内容
  //     style.innerHTML = request.response;
  //     //（3）插到头里面
  //     document.head.appendChild(style);
  //   };
  //   request.onerror = () => {
  //     console.log("失败了");
  //   };
  //4.调用对象的 send() 方法
  request.send(); //readyState = 2
};
