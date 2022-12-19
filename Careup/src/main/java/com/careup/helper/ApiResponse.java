package com.careup.helper;

import org.springframework.stereotype.Component;

@Component
public class ApiResponse {
    private Object obj;
    private String msg;

    public ApiResponse() {
    }

    public ApiResponse(Object obj, String msg) {
        this.obj = obj;
        this.msg = msg;
    }

    public Object getObj() {
        return obj;
    }

    public void setObj(Object obj) {
        this.obj = obj;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
