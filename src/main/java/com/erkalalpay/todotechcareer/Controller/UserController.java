package com.erkalalpay.todotechcareer.Controller;

import com.erkalalpay.todotechcareer.Model.Dto.LoginResponse;
import com.erkalalpay.todotechcareer.Model.Request.LoginRequest;
import com.erkalalpay.todotechcareer.Model.Request.RegisterFormRequest;
import com.erkalalpay.todotechcareer.Service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class UserController {

    private UserService userService;


    @PostMapping("/user/register")
    public void userRegister(@RequestBody RegisterFormRequest request) {
        if (!userService.findByEmailForDuplacite(request.getEmail())) {
        userService.create(request);
        System.out.println("Kullanıcı başarıyla kayıt oldu");
        }else System.out.println("Hata oluştu, tekrar deneyiniz");
    }

    @PostMapping("/login")
    public LoginResponse userLogin (@RequestBody LoginRequest loginRequest){
        LoginResponse loginResponse = userService.login(loginRequest);
        return loginResponse;
    }

    @PostMapping("/deneme")
    public void deneme(@RequestBody LoginRequest loginRequest){
        System.out.println(loginRequest.toString());
    }

}
