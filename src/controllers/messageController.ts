import { Request, Response } from 'express';
import MessageModel from '../models/Message';
import Channel from '../models/channel_user';
import user from '../models/User';
import { getDataToken } from '../utils';
import ChannelModel from '../models/Channel';
import ChannelUserModel from '../models/channel_user';

export default {
  getAllMessage: async (req: Request, res: Response) => {
    try {
      const allMessage = MessageModel.findAll({ raw: true });
      res.status(200).send({
        meta: {
          type: 'success',
          status: 200,
          message: '',
        },
        allMessage,
      });
    } catch (err) {
      res.status(500).send({
        meta: {
          type: 'error',
          status: 500,
          message: 'server error',
        },
      });
    }
  },

  createMessage: async (req: Request, res: Response) => {
    try {
      const { channel_id, user_id, text } = req.body;

      const current_user: any = getDataToken(req);

      let data: any = {
        user_id_sender: current_user.user_id.toString(),
        user_id_receipter: user_id.toString(),
        channel_id: channel_id.toString(),
        text: text.toString(),
      };

      /* check if it is upload or message */
      const messageResponse = await MessageModel.create(data);
      const message = messageResponse.get({ plain: true });
      return {
        meta: {
          type: 'success',
          status: 200,
          message: '',
        },
        message,
      };
    } catch (err) {
      console.log(err);
      return {
        meta: {
          type: 'error',
          status: 500,
          message: 'server error',
        },
      };
    }
  },

  getMessage: async (req: any, res: Response) => {
    try {
      const current_user: any = getDataToken(req);
      const { channel_id } = req.body;
      const { offset } = req.query;

      const channel = await ChannelModel.findOne({
        raw: true,
        where: { channel_id: channel_id },
      });

      if (!channel?.get().public) {
        const member = await ChannelUserModel.findOne({
          raw: true,
          where: { channel_id: channel_id, user_id: current_user.user_id },
        });
        if (!member) {
          res.status(403).send({
            meta: {
              type: 'error',
              status: 403,
              message: 'Not Authorized',
            },
          });
        }
      }

      const messageList = await MessageModel.findAll({
        order: [['created_at', 'DESC']],
        where: { channel_id: channel_id },
        limit: 30,
        offset,
        raw: true,
      });

      return res.status(200).send({
        meta: {
          type: 'success',
          status: 200,
          message: '',
        },
        messageList: messageList.reverse(),
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        meta: {
          type: 'error',
          status: 500,
          message: 'server error',
        },
      });
    }
  },
};
