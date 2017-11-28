import com.intuit.karate.junit4.Karate;
import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.runner.RunWith;

@RunWith(Karate.class)
@CucumberOptions(
        format={"pretty", "html:reports/test-report"},
        features = "src/test/resources",
        glue = "steps"
)

public class mainTestclass {
    @Given("^url$")
    public void givenStatement() {
        System.out.println("");
    }

    @When("^method$")
    public void whenStatement() {
        System.out.println("");
    }

    @Then("^status$")
    public void thenStatement() {
        System.out.println("");
    }
}
