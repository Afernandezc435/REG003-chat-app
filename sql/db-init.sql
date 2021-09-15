CREATE TABLE "users" (
    "user_id" varchar NOT NULL,
    "name" varchar NOT NULL,
    "photo_url" varchar   NOT NULL,
    "password" varchar(128)   NOT NULL,
    "email" varchar(64)   NOT NULL,
    "created_at" timestamp NOT NULL,
    "updated_at" timestamp NOT NULL,
    CONSTRAINT "pk_user" PRIMARY KEY (
        "user_id"
     ),
    CONSTRAINT "uc_user_email" UNIQUE (
        "email"
    )
);

CREATE TABLE "messages" (
    "message_id" varchar NOT NULL,
    "user_id_sender" varchar   NOT NULL,
    "user_id_receipter" varchar,
    "channel_id" varchar,
    "created_at" timestamp NOT NULL,
    "updated_at" timestamp NOT NULL,
    CONSTRAINT "pk_message" PRIMARY KEY (
        "message_id","channel_id"
     )
);

CREATE TABLE "channels" (
    "channel_id" varchar NOT NULL,
    "name" varchar   NOT NULL,
    "created_at" timestamp NOT NULL,
    "updated_at" timestamp NOT NULL,
    CONSTRAINT "pk_channel" PRIMARY KEY (
        "channel_id"
     )
);

CREATE TABLE "channels_users" (
    "channel_id" varchar NOT NULL,
    "user_id" varchar NOT NULL,
    "is_admin" BOOLEAN NOT NULL,
    "created_at" timestamp NOT NULL,
    "updated_at" timestamp NOT NULL,
    CONSTRAINT "pk_channel_user" PRIMARY KEY (
        "channel_id","user_id"
     )
);

ALTER TABLE "messages" ADD CONSTRAINT "fk_message_user_id_sender" FOREIGN KEY("user_id_sender")
REFERENCES "users" ("user_id");

ALTER TABLE "messages" ADD CONSTRAINT "fk_message_user_id_receipter" FOREIGN KEY("user_id_receipter")
REFERENCES "users" ("user_id");

ALTER TABLE "messages" ADD CONSTRAINT "fk_message_channel_id" FOREIGN KEY("channel_id")
REFERENCES "channels" ("channel_id");

ALTER TABLE "channels_users" ADD CONSTRAINT "fk_channel_user_channel_id" FOREIGN KEY("channel_id")
REFERENCES "channels" ("channel_id");

ALTER TABLE "channels_users" ADD CONSTRAINT "fk_channel_user_user_id" FOREIGN KEY("user_id")
REFERENCES "users" ("user_id");