package com.lysoft.controller;

import com.lysoft.services.IRegisterService;
import com.lysoft.tools.Logs;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("register")
public class RegisterController {

    @Resource
    private IRegisterService irs;

    @ResponseBody
    @RequestMapping(value = "adduser", produces = "text/html;charset=UTF-8", method = RequestMethod.POST)
    public String register(HttpServletRequest request, HttpServletResponse response, HttpSession session) {
        System.out.println("----------------请求成功----------------");
        JSONObject userinfo = new JSONObject(request.getParameter("json"));
        System.out.println(userinfo.toString());
        JSONObject jobj = new JSONObject();
        jobj.put("info", true);
        jobj.put("msg", "用户注册成功,请重新登录!");
        Logs.info("用户登录成功!");
        return jobj.toString();
    }

}
