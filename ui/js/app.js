function main() {
    return {
        show: false,
        minleft: 1440,

        listen() {
            window.addEventListener('message', (event) => {
                const data = event.data;

                switch (data.type) {
                    case 'show':
                        this.show = data.show;
                        break;
                    case 'update':
                        this.minleft = data.minleft;
                        break;
                }
            });
        }
    };
}