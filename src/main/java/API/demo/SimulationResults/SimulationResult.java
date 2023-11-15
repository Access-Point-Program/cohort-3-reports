package API.demo.SimulationResults;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SimulationResult {
  private Integer id;
  private String name;
  private String creation_date;
}

