package org.ensolvers.app.models.dtos;

public class UserDto {

    private Long id;
    private String name;
    private String userName;

    public UserDto(Long id, String name, String userName) {
        this.id = id;
        this.name = name;
        this.userName = userName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
