package com.lysoft.controller;

import com.lysoft.service.IRegisterService;
import org.json.JSONArray;
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

    private JSONObject jobj;
    private JSONArray jarr;

    @Resource
    private IRegisterService irs;

    @ResponseBody
    @RequestMapping(value = "adduser", produces = "text/html;charset=UTF-8", method = RequestMethod.POST)
    public String register(HttpServletRequest request, HttpServletResponse response, HttpSession session) {
        System.out.println("---------------- register ----------------");
        jobj = new JSONObject();
        jobj.put("info",true);
        jobj.put("msg","注册成功,请重新登录~!");
        irs.addUser(request, response, session);
        return jobj.toString();
    }

}
