package com.careup.helper;

public class JavaTest {
    public static void main(String[] args) {
//        String s1 = "dd";
//        s1 = "";
//        String s2 = "Devendra";

//        System.out.println(s1.equalsIgnoreCase(s2));
//        System.out.println(s1.substring(0,9));
//        System.out.println(s1.isBlank());
//        long l = 89l;
//        String s = String.valueOf(l);
//        System.out.println(s);

        Student st = new Student();
        st.setStName("ABC");
        st.setStClass("xyz");

        System.out.println(st.getStName()+" "+st.getStClass());

    }
}
