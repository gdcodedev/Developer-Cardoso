
# Tipos de Testes

Objetivo: Testar pequenas partes do código de forma isolada, geralmente funções ou métodos.
Ferramentas Comuns: JUnit, TestNG.
Testes de Integração

Objetivo: Verificar se diferentes módulos ou componentes do sistema funcionam bem juntos.
Ferramentas Comuns: Spring Test, Arquillian.
Testes Funcionais

Objetivo: Testar as funcionalidades do sistema do ponto de vista do usuário.
Ferramentas Comuns: Selenium, Cucumber.
Testes de Aceitação

Objetivo: Validar se o sistema atende aos requisitos e especificações do cliente.
Ferramentas Comuns: Cucumber, FitNesse.
Testes de Performance

Objetivo: Avaliar o desempenho do sistema sob carga.
Ferramentas Comuns: JMeter, Gatling.
Testes de Segurança

Objetivo: Garantir que o sistema está protegido contra vulnerabilidades e ataques.
Ferramentas Comuns: OWASP ZAP, Nessus.
Ferramentas e Frameworks de Testes
JUnit

Anotações Comuns: @Test, @Before, @After, @BeforeClass, @AfterClass.
Assertivas: assertEquals, assertTrue, assertFalse, assertNull, assertNotNull.
Mockito

Uso: Ferramenta de mocking para criar objetos simulados em testes unitários.
Principais Funcionalidades: when, thenReturn, verify.
Selenium

Uso: Automação de testes de interface do usuário para aplicações web.
Componentes: WebDriver, Selenium Grid.
Cucumber

Uso: Testes de aceitação e BDD (Behavior-Driven Development).
Gherkin: Linguagem usada para escrever cenários de teste.
Boas Práticas de Testes
Testes Independentes

Testes devem ser independentes uns dos outros para garantir que a execução não seja afetada pela ordem em que são executados.
Cobertura de Código

Ferramentas: Jacoco, Cobertura.
Objetivo: Medir a quantidade de código que é coberto pelos testes.
Mocking e Stubbing

Usar mocks e stubs para isolar o código sob teste de suas dependências externas.
Teste de Código Herdeiro e Código Legado

Técnicas para introduzir testes em sistemas existentes que não têm cobertura de testes adequada.
Test-Driven Development (TDD)

Ciclo: Red -> Green -> Refactor.
Escrever testes antes de implementar a funcionalidade.
Exemplos Práticos
Teste Unitário com JUnit e Mockito
java


## Java Mockito

```
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testFindUserById() {
        User user = new User(1, "John Doe");
        when(userRepository.findById(1)).thenReturn(Optional.of(user));

        User foundUser = userService.findUserById(1);
        assertNotNull(foundUser);
        assertEquals("John Doe", foundUser.getName());

        verify(userRepository, times(1)).findById(1);
    }
}

```


##  Teste Funcional com Selenium
```
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class GoogleSearchTest {

    private WebDriver driver;

    @BeforeEach
    void setUp() {
        // Configurar o caminho para o driver do Chrome
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
        driver = new ChromeDriver();
    }

    @Test
    void testGoogleSearch() {
        driver.get("https://www.google.com");
        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("JUnit 5");
        searchBox.submit();

        WebElement result = driver.findElement(By.id("result-stats"));
        assertNotNull(result);
    }

    @AfterEach
    void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}

```
Testes unitários focam em partes individuais do código de forma isolada, enquanto testes de integração verificam a interação entre diferentes módulos ou componentes.