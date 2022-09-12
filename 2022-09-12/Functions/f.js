const a = {
    x: function() {
        console.log(this);
    }
};

const b = {
    x: () => {
        console.log(this);
    }
};

a.x();
b.x();