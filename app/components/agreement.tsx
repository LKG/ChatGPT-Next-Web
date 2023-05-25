import styles from "./agreement.module.scss";

export function Agreement(props: { onClick?: (e: any) => void }) {
  return (
    <div className={styles["agreement-content"]}>
      <p className={styles["agreement-title"]}>一、服务条款的确认和接纳</p>
      <p>
        （以下简称本站）的各项电子服务的所有权和运作权归本站。本站提供的服务将完全按照其发布的服务条款和操作规则严格执行。用户必须完全同意所有服务条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的当然约定依据，除非违反国家强制性法律，否则始终有效。在下订单的同时，您也同时承认了您拥有购买这些产品的权利能力和行为能力，并且将您对您在订单中提供的所有信息的真实性负责。
      </p>
      <p className={styles["agreement-title"]}>二、服务简介</p>
      <p>
        基于本站所提供的网络服务的重要性，用户应同意：提供详尽、准确的个人资料。不断更新注册资料，符合及时、详尽、准确的要求。本站对用户的电子邮件、手机号等隐私资料进行保护，承诺不会在未获得用户许可的情况下擅自将用户的个人资料信息出租或出售给任何第三方，但以下情况除外：用户同意让第三方共享资料；用户同意公开其个人资料，享受为其提供的产品和服务；本站需要听从法庭传票、法律命令或遵循法律程序；本站发现用户违反了本站服务条款或本站其它使用规定。关于用户隐私的具体协议以本站的隐私声明为准。如果用户提供的资料包含有不正确的信息，本站保留结束用户使用网络服务资格的权利。
      </p>
      <p className={styles["agreement-title"]}>三、服务条款的修改</p>
      <p>
        本站将可能不定期的修改本用户协议的有关条款，一旦条款及服务内容产生变动，本站将会在重要页面上提示修改内容。如果不同意本站对条款内容所做的修改，用户可以主动取消获得的网络服务。如果用户继续使用本站的服务，则视为接受服务条款的变动。本站保留随时修改或中断服务而不需告知用户的权利。本站行使修改或中断服务的权利，不需对用户或第三方负责。
      </p>
      <p className={styles["agreement-title"]}>四、用户的账户，密码和安全性</p>
      <p>
        用户一旦注册成功，成为本站的合法用户，将得到一个密码和用户名。您可随时根据指示改变您的密码。用户将对用户名和密码安全负全部责任。另外，每个用户都要对以其用户名进行的所有活动和事件负全责。用户若发现任何非法使用用户账户或存在安全漏洞的情况，请立即通告本站。哗啦啦帐号使用权仅属于初始注册人，禁止赠与、借用、租用、转让或售卖。如果哗啦啦发现使用者并非帐号初始注册人，哗啦啦有权在未经通知的情况下回收该帐号而无需向该帐号使用人承担法律责任。哗啦啦禁止用户私下有偿或无偿转让帐号，以免因帐号问题产生纠纷，用户应当自行承担因违反此要求而遭致的任何损失，同时哗啦啦保留追究上述行为人法律责任的权利。如发生利用计算机程序进行恶意注册、邀请、参与的情形，哗啦啦有权在不事先通知用户的情况下单方面中断或终止向用户提供服务而无需通知用户。
      </p>
      <p className={styles["agreement-title"]}>五、拒绝提供担保</p>
      <p>
        用户个人对网络服务的使用承担风险。本站对此不作任何类型的担保，不论是明确的或隐含的，但是不对商业性的隐含担保、特定目的和不违反规定的适当担保作限制。本站不担保服务一定能满足用户的要求，也不担保服务不会受中断，对服务的及时性，安全性，出错发生都不作担保。本站对在本站上得到的任何商品购物服务或交易进程，不作担保。
      </p>
      <p className={styles["agreement-title"]}>六、有限责任</p>
      <p>
        本站对任何直接、间接、偶然、特殊及继起的损害不负责任，这些损害可能来自：不正当使用网络服务，在网上购买商品或进行同类型服务，在网上进行交易，非法使用网络服务或用户传送的信息有所变动。这些行为都有可能会导致本站的形象受损，所以本站事先提出这种损害的可能性。
      </p>
      <p className={styles["agreement-title"]}>七、对用户信息的存储和限制</p>
      <p>
        本站不对用户所发布信息的删除或储存失败负责。本站有判定用户的行为是否符合本站服务条款的要求和精神的保留权利，如果用户违背了服务条款的规定，本站有中断对其提供网络服务的权利。
      </p>
      <p className={styles["agreement-title"]}>八、保障用户</p>
      <p>
        同意保障和维护本站全体成员的利益，负责支付由用户使用超出业务范围引起的律师费用，违反服务条款的损害补偿费用等。
      </p>
      <p className={styles["agreement-title"]}>九、结束服务</p>
      <p>
        用户或本站可随时根据实际情况中断一项或多项网络服务。本站不需对任何个人或第三方负责而随时中断服务。用户对后来的条款修改有异议，或对本站的服务不满，可以行使如下权利：停止使用本站的网络服务。通告本站停止对该用户的服务。结束用户服务后，用户使用网络服务的权利马上中止。从那时起，用户没有权利要求本站，本站也没有义务传送任何未处理的信息或提供未完成的服务给用户或第三方。
      </p>
      <p className={styles["agreement-title"]}>十、通告</p>
      <p>
        所有发给用户的通告都可通过重要页面的公告或电子邮件或常规的信件传送。本站的活动信息也将定期通过页面公告及电子邮件方式向用户发送。用户协议条款的修改、服务变更、或其它重要事件的通告都会以此形式进行。
      </p>
      <p className={styles["agreement-title"]}>十一、参与广告策划</p>
      <p>
        用户在他们发表的信息中加入宣传资料或参与广告策划，在本站的免费服务上展示他们的产品，任何这类促销方法，包括运输货物、付款、服务、商业条件、担保及与广告有关的描述都只是在相应的用户和广告销售商之间发生。本站不承担任何责任，本站没有义务为这类广告销售负任何一部分的责任。
      </p>
      <p className={styles["agreement-title"]}>十二、网络服务内容的所有权</p>{" "}
      <p>
        本站定义的网络服务内容包括：文字、软件、声音、图片、录象、图表、广告中的全部内容；电子邮件的全部内容；本站为用户提供的其他信息。所有这些内容受版权、商标、标签和其它财产所有权法律的保护。所以，用户只能在本站和广告商授权下才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。本站所有的文章版权归原文作者和本站共同所有，任何人需要转载本站的文章，必须征得原文作者或本站授权。
      </p>
      <p className={styles["agreement-title"]}>十三、责任限制</p>
      <p>
        如因不可抗力或其他本站无法控制的原因使本站销售系统崩溃或无法正常使用导致网上交易无法完成或丢失有关的信息、记录等，本站不承担责任。但是本站会尽可能合理地协助处理善后事宜，并努力使客户免受经济损失。除了本站的使用条件中规定的其它限制和除外情况之外，在中国法律法规所允许的限度内，对于因交易而引起的或与之有关的任何直接的、间接的、特殊的、附带的、后果性的或惩罚性的损害，或任何其它性质的损害，本站、本站的董事、管理人员、雇员、代理或其它代表在任何情况下都不承担责任。本站的全部责任，不论是合同、保证、侵权（包括过失）项下的还是其它的责任，均不超过您所购买的与该索赔有关的商品价值额。
      </p>
      <p className={styles["agreement-title"]}>十四、法律管辖和适用</p>
      <p>
        本协议的订立、执行和解释及争议的解决均应适用中国法律。如发生本站服务条款与中国法律相抵触时，则这些条款将完全按法律规定重新解释，而其它合法条款则依旧保持对用户产生法律效力和影响。本协议的规定是可分割的，如本协议任何规定被裁定为无效或不可执行，该规定可被删除而其余条款应予以执行。如双方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向本站所在地的人民法院提起诉讼。
      </p>
    </div>
  );
}