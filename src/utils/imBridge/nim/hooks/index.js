import { onconnect, ondisconnect, onerror, onwillreconnect } from './connect';
import { onloginportschange } from './multiEnded';
import { onblacklist, onsyncmarkinblacklist, onmutelist, onsyncmarkinmutelist } from './blackAndMute';
import { onfriends, onsyncfriendaction } from './friend';
import { onmyinfo, onupdatemyinfo, onusers, onupdateuser } from './userInfo';
import { onteams, onsynccreateteam, onteammembers, onsyncteammembersdone, onupdateteammember } from './team';
import {
  onSuperTeams,
  onSyncCreateSuperTeam,
  onDismissSuperTeam,
  onUpdateSuperTeamMember,
  onUpdateSuperTeam,
  onAddSuperTeamMembers,
  onRemoveSuperTeamMembers,
} from './superTeam';
import { onsessions, onupdatesession } from './session';
import { onroamingmsgs, onofflinemsgs, onmsg } from './message';
import {
  onofflinesysmsgs,
  onsysmsg,
  onupdatesysmsg,
  onsysmsgunread,
  onupdatesysmsgunread,
  onofflinecustomsysmsgs,
  oncustomsysmsg,
} from './sysMsg';

export default {
  // 链接
  onconnect,
  ondisconnect,
  onerror,
  onwillreconnect,

  //多端
  onloginportschange,

  //黑名单和静音
  onblacklist,
  onsyncmarkinblacklist,
  onmutelist,
  onsyncmarkinmutelist,

  //好友
  onfriends,
  onsyncfriendaction,

  //用户信息
  onmyinfo,
  onupdatemyinfo,
  onusers,
  onupdateuser,

  //群组
  onteams,
  onsynccreateteam,
  onteammembers,
  onsyncteammembersdone,
  onupdateteammember,

  // 超大群
  onSuperTeams,
  onSyncCreateSuperTeam,
  onDismissSuperTeam,
  onUpdateSuperTeamMember,
  onUpdateSuperTeam,
  onAddSuperTeamMembers,
  onRemoveSuperTeamMembers,

  // 会话
  onsessions,
  onupdatesession,

  //消息
  onroamingmsgs,
  onofflinemsgs,
  onmsg,

  //系统消息
  onofflinesysmsgs,
  onsysmsg,
  onupdatesysmsg,
  onsysmsgunread,
  onupdatesysmsgunread,
  onofflinecustomsysmsgs,
  oncustomsysmsg,
};
