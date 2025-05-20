try {
    let x = 2 / 0;

    if (!isFinite(x)) {
        throw new Error("Divided by zero error");
    }
} catch (error) {
    console.log("Caught error:", error.message);
}