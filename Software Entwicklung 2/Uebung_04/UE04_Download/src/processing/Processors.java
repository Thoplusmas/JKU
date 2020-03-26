package processing;

import data.Data;
import java.util.ArrayList; // import the ArrayList class

/**
 * This static-only class provides several factory methods and classes for
 * creating {@link Processor} objects.
 */
public class Processors {

	// static only class that should not be instantiated; hide constructor
	private Processors() {
	}

	// 1) oeffentliche, abstrakte, statische, innere Klasse "Scaler"
	public static abstract class Scaler implements Processor {
		public abstract double getMin();

		public abstract double getMax();

		public Data process(final Data data) {
			final double dataMin = DataUtil.min(data);
			final double dataMax = DataUtil.max(data);
			final ArrayList<Double> newValues = new ArrayList<Double>();

			data.forEach((val) -> {
				final double scaled = (val - dataMin) / (dataMax - dataMin);
				final double newVal = scaled * (getMax() - getMin()) + getMin();
				newValues.add(newVal);
			});
			// as Data() constructor requires a double[] and i work with a arraylist i
			// convert it back to primitive double arry
			// i could also use a double[] because of data.size() function but this seems
			// acceptable too
			// in addition this fullfills all requirements of the task given
			return new Data(newValues.stream().mapToDouble(Double::doubleValue).toArray());
		}

		@Override
		public String getName() {
			return "Scaler(min=" + this.getMin() + ", max=" + this.getMax() + ")";
		}
	}

	// 2) oeffentliche, statische Methode "Processor scale(double min, double max)"
	public static Processor scale(final double min, final double max) {
		return new Scaler() {

			@Override
			public double getMin() {
				return min;
			}

			@Override
			public double getMax() {
				return max;
			}

		};

	}

	// 3) oeffentliche, statische, innere Klasse "PercentScaler"
	public static class PercentScaler extends Scaler {

		@Override
		public double getMin() {
			return 0;
		}

		@Override
		public double getMax() {
			return 100;
		}

	}

	// 4) oeffentliche, statische Methode "Processor standardize()"
	public static Processor standardize() {
		return new Processor() {

			@Override
			public Data process(final Data data) {
				final ArrayList<Double> newValues = new ArrayList<Double>();
				final double avg = DataUtil.avg(data);
				final double std = DataUtil.std(data);

				data.forEach((val) -> {
					final double newVal = (val - avg) / std;
					newValues.add(newVal);
				});
				// see above why i use arraylist
				return new Data(newValues.stream().mapToDouble(Double::doubleValue).toArray());
			}

			@Override
			public String getName() {
				return "Standardizer";
			}
		};
	}

	// 5) private, statische, innere Klasse "Clipper"

	private static class Clipper implements Processor {
		private final boolean clipLower;
		private final boolean clipUpper;
		private final double lower;
		private final double upper;

		public Clipper(final boolean clipLower, final boolean clipUpper, final double lower, final double upper) {
			this.clipLower = clipLower;
			this.clipUpper = clipUpper;
			this.lower = lower;
			this.upper = upper;
		}

		@Override
		public Data process(final Data data) {
			final ArrayList<Double> newValues = new ArrayList<Double>();

			data.forEach((val) -> {
				if (this.clipLower && val < this.lower) {
					newValues.add(this.lower);
				} else if (this.clipUpper && val > this.upper) { // use else if, because this saves the second if check
																	// if we hit the first if
					newValues.add(this.upper);
				} else {
					newValues.add(val);
				}

			});
			// see above why i use arraylist
			return new Data(newValues.stream().mapToDouble(Double::doubleValue).toArray());
		}

		@Override
		public String getName() {
			String val = "Clipper";
			if (this.clipLower && this.clipUpper) {
				val += "(lower=" + this.lower + ", upper=" + this.upper + ")";
			} else if (this.clipLower) {
				val += "(lower=" + this.lower + ")";
			} else if (this.clipUpper) {
				val += "(upper=" + this.lower + ")";
			}
			return val;
		}

	}
	// 6) oeffentliche, statische Methode "Processor clip(double lower, double
	// upper)"

	public static Processor clip(double lower, double upper) {
		return new Clipper(true, true, lower, upper);
	}
	// 6) oeffentliche, statische Methode "Processor clipLower(double lower)"

	public static Processor clipLower(double lower) {
		return new Clipper(true, false, lower, 0);
	}
	// 6) oeffentliche, statische Methode "Processor clipUpper(double upper)"

	public static Processor clipUpper(double upper) {
		return new Clipper(false, true, 0, upper);
	}

	// static helper class for statistical measures of Data objects
	private static class DataUtil {

		/**
		 * Returns the minimum of the specified <code>Data</code> object.
		 */
		public static double min(final Data data) {
			double min = Double.POSITIVE_INFINITY;
			for (final double d : data) {
				if (d < min) {
					min = d;
				}
			}
			return min;
		}

		/**
		 * Returns the maximum of the specified <code>Data</code> object.
		 */
		public static double max(final Data data) {
			double max = Double.NEGATIVE_INFINITY;
			for (final double d : data) {
				if (d > max) {
					max = d;
				}
			}
			return max;
		}

		/**
		 * Returns the average (mean) of the specified <code>Data</code> object.
		 */
		public static double avg(final Data data) {
			double sum = 0;
			for (final double d : data) {
				sum += d;
			}
			return sum / data.size();
		}

		/**
		 * Returns the standard deviation of the specified <code>Data</code> object.
		 */
		public static double std(final Data data) {
			final double avg = avg(data);
			double sum = 0;
			for (final double d : data) {
				final double deviation = d - avg;
				sum += deviation * deviation;
			}
			return Math.sqrt(sum / data.size());
		}

	}

}
