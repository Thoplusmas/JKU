package app;

import data.Data;
import processing.Processor;
import processing.Processors;

import java.io.IOException;

public class Main {

	public static void main(String[] args) throws IOException {
		Data data = Data.readFromFile("data.csv");
		Processor[] processors = { new Processors.PercentScaler(), Processors.scale(-20, 123), Processors.standardize(),
				Processors.clipLower(-1), Processors.clipUpper(1.1), Processors.clip(-0.7, 1) };
		for (Processor p : processors) {
			System.out.println(String.format("processing data with '%s'", p.getName()));
			System.out.println(String.format(" before: %s", data));
			data = p.process(data);
			System.out.println(String.format(" after: %s", data));
		}
		data.writeToFile("data_processed.csv");
	}

	// MY OUTPUT

	/**
	 * processing data with 'Scaler(min=0.0, max=100.0)' before:
	 * 2.0,4.0,4.0,4.0,5.0,5.0,7.0,9.0 after:
	 * 0.0,28.57142857142857,28.57142857142857,28.57142857142857,42.857142857142854,42.857142857142854,71.42857142857143,100.0
	 * processing data with 'Scaler(min=-20.0, max=123.0)' before:
	 * 0.0,28.57142857142857,28.57142857142857,28.57142857142857,42.857142857142854,42.857142857142854,71.42857142857143,100.0
	 * after:
	 * -20.0,20.857142857142854,20.857142857142854,20.857142857142854,41.285714285714285,41.285714285714285,82.14285714285714,123.0
	 * processing data with 'Standardizer' before:
	 * -20.0,20.857142857142854,20.857142857142854,20.857142857142854,41.285714285714285,41.285714285714285,82.14285714285714,123.0
	 * after: -1.4999999999999998,-0.5,-0.5,-0.5,0.0,0.0,0.9999999999999998,2.0
	 * processing data with 'Clipper (lower=-1.0)' before:
	 * -1.4999999999999998,-0.5,-0.5,-0.5,0.0,0.0,0.9999999999999998,2.0 after:
	 * -1.0,-0.5,-0.5,-0.5,0.0,0.0,0.9999999999999998,2.0 processing data with
	 * 'Clipper (upper=0.0)' before:
	 * -1.0,-0.5,-0.5,-0.5,0.0,0.0,0.9999999999999998,2.0 after:
	 * -1.0,-0.5,-0.5,-0.5,0.0,0.0,0.9999999999999998,1.1 processing data with
	 * 'Clipper(lower=-0.7, upper=1.0)' before:
	 * -1.0,-0.5,-0.5,-0.5,0.0,0.0,0.9999999999999998,1.1 after:
	 * -0.7,-0.5,-0.5,-0.5,0.0,0.0,0.9999999999999998,1.0
	 */

}
