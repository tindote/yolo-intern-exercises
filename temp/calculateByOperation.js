function add(a, b) {
    return a + b;
}

function calculateByOperation(numbers, operation) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result = operation(result, numbers[i]);
    }

    return result;
}

const numbers = [1, 2, 3, 4];

const total =
    calculateByOperation(numbers, add);

console.log(total);

/**
Sau khi xử lý thấy dữ liệu được truyền qua từng function thay vì thao tác trực tiếp trên dữ liệu gốc.
Các function được tách riêng theo từng nhiệm vụ giúp chương trình dễ đọc và dễ tái sử dụng hơn.

Bài làm không thay đổi dữ liệu ban đầu và không sử dụng trạng thái chung.
Ngoài ra còn sử dụng higher-order function bằng cách truyền function vào function khác để xử lý dữ liệu linh hoạt hơn.
*/