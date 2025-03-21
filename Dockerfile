FROM quay.io/princerudh/rudhra:latest
RUN git clone https://github.com/princerudh/rudhra6 /root/rudhra/
WORKDIR /root/rudhra/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
