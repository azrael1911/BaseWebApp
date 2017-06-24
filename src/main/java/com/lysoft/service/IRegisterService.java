package com.lysoft.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Azrael1911 on 2017/06/24.
 * */
public interface IRegisterService {

    /**
     * 注册用户
     * */
    public String addUser(HttpServletRequest request, HttpServletResponse response, HttpSession session);
}
