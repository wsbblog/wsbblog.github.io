function reward(){
    Swal.fire({
      title: '<strong>您正在为 <u>wsb</u> 充电</strong>',
      html: '<b>请选择您的付款方式</b>',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText:
        '<i class="fa-brands fa-QQ"></i> QQ支付',
      cancelButtonText:
        '<i class="fa-brands fa-weixin"></i> 微信支付',
      confirmButtonColor: '#1677FF',
      cancelButtonColor: '#2AAE67',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '感谢您',
          html: '请打开QQ <b>[扫一扫]</b> 以充电',
          imageUrl: 'https://z4a.net/images/2022/12/25/_cgi-bin_mmwebwx-bin_webwxgetmsgimg__MsgID3760829767992065867skeycrypt_b0f3857b_6b553330ff1ac74ea93422fc725c6a3ammweb_appidwx_webfilehelper.jpg',
          imageWidth: 175,
          imageHeight: 175,
          imageAlt: 'Custom image'
        }).then((result) => {
          Swal.fire(
            '充电成功',
            '感谢您的支持',
            'success'
          )
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: '感谢您',
          html: '请打开微信 <b>[扫一扫]</b> 以充电',
          imageUrl: 'https://z4a.net/images/2022/12/25/_cgi-bin_mmwebwx-bin_webwxgetmsgimg__MsgID7581765197610367714skeycrypt_b0f3857b_a51e07af84e016fdec54ddbf70734ecammweb_appidwx_webfilehelper.jpg',
          imageWidth: 175,
          imageHeight: 175,
          imageAlt: 'Custom image'
        }).then((result) => {
          Swal.fire(
            '充电成功',
            '感谢您的支持',
            'success'
          )
        })
      }
    })
  }
  