package com.careup.helper;

public class Student {
    private String stName;
    private String stClass;

    public Student() {
    }

    public Student(String stName, String stClass) {
        this.stName = stName;
        this.stClass = stClass;
    }

    public String getStName() {
        return stName;
    }

    public void setStName(String stName) {
        this.stName = stName;
    }

    public String getStClass() {
        return stClass;
    }

    public void setStClass(String stClass) {
        this.stClass = stClass;
    }
}
