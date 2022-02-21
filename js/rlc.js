IEC_SERIES = {
  E3: [1.0, 2.2, 4.7],
  E6: [1.0, 1.5, 2.2, 3.3, 4.7],
  E12: [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2],
  E24: [
    1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2,
    9.1,
  ],
  E48: [
    1.0, 1.05, 1.1, 1.15, 1.21, 1.27, 1.33, 1.4, 1.47, 1.54, 1.62, 1.69, 1.78, 1.87, 1.96, 2.05, 2.15, 2.26, 2.37, 2.49,
    2.61, 2.74, 2.87, 3.01, 3.16, 3.32, 3.48, 3.65, 3.83, 4.02, 4.22, 4.42, 4.64, 4.87, 5.11, 5.36, 5.62, 5.9, 6.19,
    6.49, 6.81, 7.15, 7.5, 7.87, 8.25, 8.66, 9.09, 9.53,
  ],
  E96: [
    1.0, 1.02, 1.05, 1.07, 1.1, 1.13, 1.15, 1.18, 1.21, 1.24, 1.27, 1.3, 1.33, 1.37, 1.4, 1.43, 1.47, 1.5, 1.54, 1.58,
    1.62, 1.65, 1.69, 1.74, 1.78, 1.82, 1.87, 1.91, 1.96, 2.0, 2.05, 2.1, 2.15, 2.21, 2.26, 2.32, 2.37, 2.43, 2.49,
    2.55, 2.61, 2.67, 2.74, 2.8, 2.87, 2.94, 3.01, 3.09, 3.16, 3.24, 3.32, 3.4, 3.48, 3.57, 3.65, 3.74, 3.83, 3.92,
    4.02, 4.12, 4.22, 4.32, 4.42, 4.53, 4.64, 4.75, 4.87, 4.99, 5.11, 5.23, 5.36, 5.49, 5.62, 5.76, 5.9, 6.04, 6.19,
    6.34, 6.49, 6.65, 6.81, 6.98, 7.15, 7.32, 7.5, 7.68, 7.87, 8.06, 8.25, 8.45, 8.66, 8.87, 9.09, 9.31, 9.53, 9.76,
  ],
  E192: [
    1.0, 1.01, 1.02, 1.04, 1.05, 1.06, 1.07, 1.09, 1.1, 1.11, 1.13, 1.14, 1.15, 1.17, 1.18, 1.2, 1.21, 1.23, 1.24, 1.26,
    1.27, 1.29, 1.3, 1.32, 1.33, 1.35, 1.37, 1.38, 1.4, 1.42, 1.43, 1.45, 1.47, 1.49, 1.5, 1.52, 1.54, 1.56, 1.58, 1.6,
    1.62, 1.64, 1.65, 1.67, 1.69, 1.72, 1.74, 1.76, 1.78, 1.8, 1.82, 1.84, 1.87, 1.89, 1.91, 1.93, 1.96, 1.98, 2.0,
    2.03, 2.05, 2.08, 2.1, 2.13, 2.15, 2.18, 2.21, 2.23, 2.26, 2.29, 2.32, 2.34, 2.37, 2.4, 2.43, 2.46, 2.49, 2.52,
    2.55, 2.58, 2.61, 2.64, 2.67, 2.71, 2.74, 2.77, 2.8, 2.84, 2.87, 2.91, 2.94, 2.98, 3.01, 3.05, 3.09, 3.12, 3.16,
    3.2, 3.24, 3.28, 3.32, 3.36, 3.4, 3.44, 3.48, 3.52, 3.57, 3.61, 3.65, 3.7, 3.74, 3.79, 3.83, 3.88, 3.92, 3.97, 4.02,
    4.07, 4.12, 4.17, 4.22, 4.27, 4.32, 4.37, 4.42, 4.48, 4.53, 4.59, 4.64, 4.7, 4.75, 4.81, 4.87, 4.93, 4.99, 5.05,
    5.11, 5.17, 5.23, 5.3, 5.36, 5.42, 5.49, 5.56, 5.62, 5.69, 5.76, 5.83, 5.9, 5.97, 6.04, 6.12, 6.19, 6.26, 6.34,
    6.42, 6.49, 6.57, 6.65, 6.73, 6.81, 6.9, 6.98, 7.06, 7.15, 7.23, 7.32, 7.41, 7.5, 7.59, 7.68, 7.77, 7.87, 7.96,
    8.06, 8.16, 8.25, 8.35, 8.45, 8.56, 8.66, 8.76, 8.87, 8.98, 9.09, 9.2, 9.31, 9.42, 9.53, 9.65, 9.76, 9.88,
  ],
};

const Configuration = Object.freeze({
  SERIES: 0,
  PARALLEL: 1,
  isValid: function (config) {
    return config == Configuration.SERIES || config == Configuration.PARALLEL;
  },
});

class Resistor {
  constructor(value) {
    this.value = value;
  }

  getUnit() {
    return "Ω";
  }

  getValue() {
    console.assert(this.value !== undefined && this.value !== null);

    if (this.connection != null && this.config != null) {
      if (this.config == Configuration.SERIES) {
        return this.value + this.connection.getValue();
      } else if (this.config == Configuration.PARALLEL) {
        return 1 / (1 / this.value + 1 / this.connection.getValue());
      }
    }

    return this.value;
  }

  getSelfValue() {
    return this.value;
  }

  getNumComponents() {
    if (this.connection != null && this.config != null) {
      return 1 + this.connection.getNumComponents();
    }

    return 1;
  }

  connectTo(resistor, config) {
    console.assert(resistor instanceof Resistor);
    console.assert(Configuration.isValid(config));

    this.connection = resistor;
    this.config = config;
  }

  getConnection() {
    if (this.connection != null && this.config != null) {
      return {
        connectedTo: this.connection,
        config: this.config,
      };
    }

    return null;
  }

  static findMissingValue(r1, rFinal, config) {
    console.assert(!Number.isNaN(r1) && !Number.isNaN(rFinal));
    console.assert(Configuration.isValid(config));

    // Compute the missing value based on configuration
    if (config === Configuration.SERIES) {
      console.assert(rFinal >= r1);
      return rFinal - r1;
    } else if (config === Configuration.PARALLEL) {
      console.assert(rFinal < r1);
      return (r1 * rFinal) / (r1 - rFinal);
    }

    return null;
  }

  static getPath2D() {
    let resistorPath = new Path2D();
    resistorPath.moveTo(0, 0);

    let h = 5;
    let w = 5;
    let end = w * 8;

    for (let x = w / 2; x < end; x += w) {
      h = h * -1;
      resistorPath.lineTo(x, h);
    }

    resistorPath.lineTo(end, 0);

    return {
      path: resistorPath,
      width: end,
      height: Math.abs(h * 2),
    };
  }
}

function generateSetFromIecSeries(series) {
  console.assert(Array.isArray(series));

  let result = [];
  for (let decade = 0; decade < 6; decade++) {
    for (let i = 0; i < series.length; i++) {
      result.push(series[i] * Math.pow(10, decade));
    }
  }

  return result;
}

function findSubstitutesRLC(RLCType, targetValue, availableValues, errorTolerance, maxComponents) {
  console.assert(new RLCType() instanceof Resistor || new RLCType() instanceof Capacitor);
  console.assert(!Number.isNaN(targetValue) && targetValue > 0);
  console.assert(!Number.isNaN(errorTolerance) && errorTolerance > 0);
  console.assert(!Number.isNaN(maxComponents) && maxComponents > 0);
  console.assert(Array.isArray(availableValues) && availableValues.length > 0);

  let results = [];

  // First, we'll try to find a single component that is close to
  // the target value.
  let errors = availableValues.map((x) => computeAbsError(targetValue, x));
  console.assert(errors.length == availableValues.length);

  errors.forEach(function (error, index) {
    if (error <= errorTolerance) {
      results.push({
        substitute: new RLCType(availableValues[index]),
        error: error,
      });
    }
  });

  if (maxComponents == 1) {
    return results;
  }

  // Find potential series solutions
  availableValues
    .filter((x) => x < targetValue)
    .forEach(function (value) {
      let needed = RLCType.findMissingValue(value, targetValue, Configuration.SERIES);
      let substitutes = findSubstitutesRLC(RLCType, needed, availableValues, errorTolerance, maxComponents - 1);

      substitutes.forEach(function (element) {
        let x = new RLCType(value);
        x.connectTo(element.substitute, Configuration.SERIES);

        let error = computeAbsError(targetValue, x.getValue());

        if (error <= errorTolerance) {
          results.push({
            substitute: x,
            error: error,
          });
        }
      });
    });

  // Find potential parallel solutions
  availableValues
    .filter((x) => x > targetValue)
    .forEach(function (value) {
      let needed = RLCType.findMissingValue(value, targetValue, Configuration.PARALLEL);
      let substitutes = findSubstitutesRLC(RLCType, needed, availableValues, errorTolerance, maxComponents - 1);

      substitutes.forEach(function (element) {
        let x = new RLCType(value);
        x.connectTo(element.substitute, Configuration.PARALLEL);

        let error = computeAbsError(targetValue, x.getValue());

        if (error <= errorTolerance) {
          results.push({
            substitute: x,
            error: error,
          });
        }
      });
    });

  return results;
}
