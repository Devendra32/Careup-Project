package com.careup.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;
    @Column(length = 50)
    private String firstName;
    @Column(length = 50)
    private String lastName;
    @Column(length = 100)
    private String emailId;
    @Column(length = 10)
    private String mobileNo;
    @Column(length = 200)
    private String address;
    @Column(length = 200)
    private String address2;
    @Column(length = 20)
    private String city;
    @Column(length = 20)
    private String state;
    @Column(length = 6)
    private String pincode;
    @Column(length = 50)
    private String photo;

    @OneToOne
    @JoinColumn(name ="roleId",nullable = false)
    private Role role;

}
