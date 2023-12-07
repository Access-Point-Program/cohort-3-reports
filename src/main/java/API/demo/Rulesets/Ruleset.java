package API.demo.Rulesets;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ruleset {
    private Integer id;
    private String name;
    private Long creation_date;
    private List<?> rules;
}