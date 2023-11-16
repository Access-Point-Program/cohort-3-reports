package API.demo.SimulationResults;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SimulationResult {
  private Integer id;
  private String ruleset;
  private String layout;
  private Long creation_date;
  private Integer iterations_used;
  private Integer iterations_max;
  private Boolean successful;
}

