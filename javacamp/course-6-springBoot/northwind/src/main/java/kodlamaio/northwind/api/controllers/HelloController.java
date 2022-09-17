package kodlamaio.northwind.api.controllers;

import kodlamaio.northwind.core.utilities.results.SuccessResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
@CrossOrigin
public class HelloController {
    @GetMapping()
    public SuccessResult getHello(){
        return new SuccessResult("Hello Demo");
    }
}
