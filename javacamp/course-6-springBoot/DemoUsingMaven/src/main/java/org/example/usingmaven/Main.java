package org.example.usingmaven;

import org.example.democalculator.withmaven.CalculatorDemoMaven;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        new CalculatorDemoMaven().multiplyDouble(2);
    }
}