package org.example.democalculator.withmaven;

public class CalculatorDemoMaven {
    public int multiplyDouble(int number) {
        int result = number * 2;
        System.out.println(result);
        update();
        return result;
    }
    private void update(){
        System.out.println("Updated : "+1.5+"-SNAPSHOT");
    }

}
