package com.lysoft.service.impl;

import com.lysoft.service.IRegisterService;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Azrael1911 on 2017/06/24.
 * */
@Service
@Transactional
public class RegisterService implements IRegisterService {

    private JSONObject jobj;
    private JSONArray jarr;

    @Override
    public String addUser(HttpServletRequest request, HttpServletResponse response, HttpSession session) {
        jobj = new JSONObject(request.getParameter("json"));
        System.out.println(jobj.toString());
        System.out.println("---------------- addUser ----------------");
        return null;
    }
}
