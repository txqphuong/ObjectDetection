

// Lớp Perceptron

// Perceptron được tạo với n trọng số và hằng số học
class Perceptron {
  constructor(n, c) {
    // mảng trọng số của mỗi input
    this.weights = new Array(n);
    // Start with random weights
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1, 1);
    }
    this.c = c; // hằng số học
  }

  // hàm huấn luyện Perceptron
  // hằng số được điều chỉnh dựa trên tham số desired
  train(inputs, desired) {
    // đoán giá trị
    let guess = this.feedforward(inputs);
    // tính hệ số thay đổi trọng số dựa trên sai số
    // Error = desired output - guessed output
    // giá trị chỉ có thể là 0, -2, hoặc 2
    // nhân với hằng số học
    let error = desired - guess;
    // điều chỉnh trọng số dựa trên weightChange * input
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.c * error * inputs[i];
    }
  }

  // dự đoán -1 hoặc 1 dựa trên giá trị input
  feedforward(inputs) {
    // tính tổng các giá trị
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    // kết quả là sign của tổng các giá trị là -1 hoặc 1
    return this.activate(sum);
  }

  //activation function
  activate(sum) {
    if (sum > 0) return 1;
    else return -1;
  }

  // trả về giá trị trọng số
  getWeights() {
    return this.weights;
  }
}
