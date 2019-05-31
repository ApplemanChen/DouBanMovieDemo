//index.js
const api = require("../../utils/api.js")

Page({
    data: {
        title: "加载中...",
        movies: [],
    },

    onLoad: function() {
        // console.log(api.API_TOP_250);

        var that = this;
        // 显示加载框
        wx.showToast({
            title: "加载中...",
            icon: "loading",
            mask: true,
            duration: 2000,
        });

        // 请求接口，加载数据
        wx.request({
            url:api.API_TOP_250,
            header:{
                "Content-Type":"application/text",
            },
            success:function(res){
                that.setData({
                    title:"豆瓣电影Top250",
                    movies:res.data.subjects
                });
                wx.hideToast();
            }
        });
    },
})