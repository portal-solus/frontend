############
# BASE IMAGE
############

FROM node:alpine3.10 as base

ENV PATH_TO_APP=/usr/src/app

WORKDIR ${PATH_TO_APP}

COPY package.json yarn.lock ./

RUN apk add --update python3 build-base


###################
# DEVELOPMENT IMAGE
###################

FROM base as development

ENV NODE_ENV=development \
    PORT=3000 \
    HOST=0.0.0.0

RUN yarn install

COPY . ./

EXPOSE ${PORT}

CMD yarn dev



####################
# PROD BUILDER IMAGE
####################

FROM base as builder

ENV NODE_ENV=production

RUN yarn install

COPY . ./

RUN yarn generate



####################
# PROD BUILDER IMAGE
####################

FROM nginx:mainline-alpine as production

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
