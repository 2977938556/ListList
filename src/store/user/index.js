
import { v4 as uuidv4 } from 'uuid';

let state = {
  uuid: "29878wsdsd",
  flage: false,
  List: {
    UserInfo:
    {
      text: "FeiMao",
      password: 1423454, age: 11, sex: "♂",
      title: "越努力,越幸运",
      bgc: {
        src: "'./001.png"
      }
    },
    data: {
      time: "2022/9/15",
      length: "5",
      arr: [
        { id: "1", data: "2022/9/15", title: "多喝怡宝", bgc: "#74b9ff" },
        { id: "2", data: "2022/9/15", title: "多喝怡宝", bgc: "#74b9ff" },
        { id: "3", data: "2022/9/15", title: "多喝怡宝", bgc: "#74b9ff" },
        { id: "4", data: "2022/9/15", title: "多喝怡宝", bgc: "#74b9ff" },
      ],
    }
  },
  user: { "text": "001", "password": "001", "data": "2022-09-18T07:56:19.322Z" }
}

let mutations = {}


let actions = {



  //01:获取登录状态
  getLogin() {
    let flage = JSON.parse(localStorage.getItem('flage'));

    if (!flage) {
      return { code: 300, messgae: "未登录请登录" };

    } else {
      let List = JSON.parse(localStorage.getItem("List"));
      return { code: 200, messgae: "成功登录", data: List };

    }
  },




  //02:获取用户登录信息
  getUserList({ commit }, value) {
    console.log(value)
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    if (value.text != user.text) {
      return Promise.reject({ message: "账户不存在", code: 300 });
    } else if (value.text != user.text || value.password != user.password) {
      return Promise.reject({ message: "账户或者密码错误", code: 300 });
    } else if (value.text == user.text && value.password == user.password) {

      //存储【登录成功的状态】【存储登录成功的数据】
      localStorage.setItem('flage', JSON.stringify({ flage: true }))
      localStorage.setItem('user', JSON.stringify({ "text": value.text, "password": value.password, "data": new Date() }))






      //将数据返回出去
      return Promise.resolve({ message: "登录成功", code: 200, user: user });
    }



  },



  //03 处理注册数据
  submitRegister({ commit }, value) {


    //将本地存储的数据重新替换
    localStorage.setItem('user', JSON.stringify({ "text": value.text, "password": value.password, "date": value.date }))


    let List = {
      List: { arr: [] },
      UserInfo: { text: '', password: '', title: '请你一定一定努力向前奔跑' },
    }
    localStorage.setItem('List', JSON.stringify(List))







    //获取List 中的数据替换以下里面的账户信息
    let s = JSON.parse(localStorage.getItem('List'))
    s.UserInfo.text = value.text
    s.UserInfo.password = value.text

    //重新存储一下
    localStorage.setItem('List', JSON.stringify(s))

    //返回状态码
    return Promise.resolve({ code: 200, messgae: "注册成功" });
  },



  //04:处理用添加数据
  AddList({ commit }, value) {

    //截取时间
    let str = value.date.slice(0, 10)

    //获取本地的列表数据
    let List = JSON.parse(localStorage.getItem('List'));


    //01：判断是否有数据 没有数据那么就在里面添加一个数据列表
    if (List.List.arr.length == 0) {
      List.List.arr.push({
        date: value.date,
        arr: [
          {
            text: value.text,
            bgc: value.Bgccolors,
            date: value.date,
            id: uuidv4()
          }
        ]
      })

      //本地存储话
      localStorage.setItem('List', JSON.stringify(List))

      //返回值 中止判断
      return false;
    } else {


      //02：循环判断时间是否包含 如果包含那么就在这个数组中进行追加
      let a = List.List.arr.some((item, index) => {
        if (item.date.indexOf(str) != -1) {
          item.arr.push({
            text: value.text,
            bgc: value.Bgccolors,
            date: value.date,
            id: uuidv4()
          })
          //本地化存储
          localStorage.setItem('List', JSON.stringify(List))
          return true;
        }
      })


      //03：判断返回值，如果返回的是一个真那么 下面追加的数据就不需要进行循环判断了
      if (a == true) {
        //返回一个false 中止判断
        return false;
      } else {
        //04：这里判断如果不包含这个日期那么就进行追加一个全新的数据结构
        List.List.arr.some((item, index) => {
          if (item.date.indexOf(str) == -1) {
            List.List.arr.push({
              date: value.date,
              arr: [
                {
                  text: value.text,
                  bgc: value.Bgccolors,
                  date: value.date,
                  id: uuidv4()
                }
              ]
            })

            //本地化存储
            localStorage.setItem('List', JSON.stringify(List))
            return true;
          }
        })
      }







    }




  },




  //05:处理删除的数据
  DeleteList({ commit }, { index, dateId }) {
    console.log(index)
    let List = JSON.parse(localStorage.getItem('List'));
    console.log("我是初始化的", List)
    List.List.arr.find((item, index) => {
      if (item.date == dateId.date) {
        item.arr.splice(index, 1)
        localStorage.setItem('List', JSON.stringify(List))

        return false;
      }
    })


  },




  //06:处理修改用户名称的数据
  AddNameList({ commit }, value) {
    let List = JSON.parse(localStorage.getItem('List'));
    let user = JSON.parse(localStorage.getItem('user'));


    List.UserInfo.text = value.text;
    List.UserInfo.title = value.title;
    List.UserInfo.date = value.date;


    localStorage.setItem('List', JSON.stringify(List));
    localStorage.setItem('user', JSON.stringify({ ...user, ...value }))



    return Promise.resolve({ code: 200, message: '修改成功' })







  }





}

let getters = {}



export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}