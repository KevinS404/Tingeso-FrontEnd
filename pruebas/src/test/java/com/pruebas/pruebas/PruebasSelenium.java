package com.pruebas.pruebas;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

import io.github.bonigarcia.wdm.WebDriverManager;
@SpringBootTest
class PruebasSelenium {
    private WebDriver driver;
    @BeforeEach
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();;

    }
    @AfterEach
    public void tearDown() throws InterruptedException {
        Thread.sleep(10);
        driver.quit();
    }
    @Test
    void test1() throws InterruptedException{
        driver.get("http://162.243.163.225:3000/Product");
        driver.manage().window().maximize();
        driver.findElement(By.name("nombre")).click();
        driver.findElement(By.name("nombre")).sendKeys("test1");
        driver.findElement(By.name("codigo")).click();
        driver.findElement(By.name("codigo")).sendKeys("24424");
        
        driver.findElement(By.name("fechaVencimiento")).sendKeys("12");
        Thread.sleep(1000);
        driver.findElement(By.name("fechaVencimiento")).sendKeys("11");
        Thread.sleep(1000);
        driver.findElement(By.name("fechaVencimiento")).sendKeys("2022");
        driver.findElement(By.name("categoria")).click();
        {
        WebElement dropdown = driver.findElement(By.name("categoria"));
        dropdown.findElement(By.xpath("//option[. = 'Nacional']")).click();
        }
        driver.findElement(By.name("precio")).click();
        driver.findElement(By.name("precio")).sendKeys("11111");
        Thread.sleep(5000);
        driver.findElement(By.cssSelector("input:nth-child(6)")).click();
        Thread.sleep(10000);
    }
    @Test
    void test2() throws InterruptedException{
        driver.get("http://162.243.163.225:3000/Product");
        driver.manage().window().maximize();
        driver.findElement(By.name("nombre")).click();
        driver.findElement(By.name("nombre")).sendKeys("test1");
        driver.findElement(By.name("codigo")).click();
        driver.findElement(By.name("codigo")).sendKeys("24424");
        
        driver.findElement(By.name("fechaVencimiento")).sendKeys("12");
        Thread.sleep(1000);
        driver.findElement(By.name("fechaVencimiento")).sendKeys("11");
        Thread.sleep(1000);
        driver.findElement(By.name("fechaVencimiento")).sendKeys("2022");
        driver.findElement(By.name("categoria")).click();
        {
        WebElement dropdown = driver.findElement(By.name("categoria"));
        dropdown.findElement(By.xpath("//option[. = 'Nacional']")).click();
        }
        Thread.sleep(5000);
        driver.findElement(By.cssSelector("input:nth-child(6)")).click();
        Thread.sleep(10000);
    }
    @Test
    void test3() throws InterruptedException{
        driver.get("http://162.243.163.225:3000/Product");
        driver.manage().window().maximize();
        Thread.sleep(5000);
        driver.findElement(By.cssSelector("tr:nth-child(1) button")).click();
        Thread.sleep(5000);
    }

}
/*
public class test8 {
    private WebDriver driver;
    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver","C:\\Users\\sebastian\\Desktop\\Pruebas\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("http://automationpractice.com/index.php");
        driver.manage().window().fullscreen();

    }
    @After
    public void tearDown() throws InterruptedException {
        TimeUnit.SECONDS.sleep(10);
        driver.quit();

    }
    @Test
    public void test1() throws InterruptedException {
        driver.findElement(By.linkText("Sign in")).click();
        Thread.sleep(2000);
        driver.findElement(By.id("email_create")).sendKeys("mingeso@gmail.com");
        driver.findElement(By.id("SubmitCreate")).click();
        Thread.sleep(3000);
        assertTrue(driver.findElement(By.id("create_account_error")).isDisplayed());
    }

}
*/