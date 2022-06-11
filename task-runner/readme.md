# Task Runner

This Dockerfile describes a Node 18.3 image with the mocha module installed globally. It runs `mocha /app/test.js`, so the following command will mount the current directory as `/app` and run mocha against test.js (if the image is named task-runner):

```sh
docker run --rm -v $(pwd):/app task-runner
```
