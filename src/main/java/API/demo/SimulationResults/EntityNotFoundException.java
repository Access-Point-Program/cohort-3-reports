package API.demo.SimulationResults;



public class EntityNotFoundException extends RuntimeException  {
    EntityNotFoundException(String entity){
        super(entity+ " not found");
    }
}
