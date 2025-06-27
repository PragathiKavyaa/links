package com.example.aari;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AariController {

    @GetMapping("/home")
    public String home() {
        return "home";
    }
    @GetMapping("/about")
    public String about() {
        return "about";
    }
    @GetMapping("/aariclass")
    public String aariclass() {
        return "aariclass";
    }
    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }
}
