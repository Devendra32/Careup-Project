package com.careup.exception;

public class InvalidUserDataException extends RuntimeException {
    public InvalidUserDataException(String msg) {
        super(msg);
    }
}
