package API.demo.Rulesets;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ruleset {
    private Integer id;
    private String name;
    private String creation_date;
}