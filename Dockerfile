FROM alpine:latest 

LABEL maintainer="Abdur Rofi <@mrofisr>"

RUN apk add yarn 

# Create a group and user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Tell docker that all future commands should run as the appuser user
USER appuser

RUN mkdir -p /home/appuser/app 

ADD . /home/appuser/app

WORKDIR /home/appuser/app

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]
