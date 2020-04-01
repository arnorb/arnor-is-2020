<template>
  <div>
    <b-row class="justify-content-center">
        <b-col lg="8">
            <div :class="{ 'shadow-lg p-4 p-md-5 mb-n5 bg-white rounded-lg' : isCard}">
                <p>Ert þú að leita að einföldum og þægilegum vef sem einfaldar alla upplýsingagjöf til viðskiptavina? Hafðu þá samband.</p>
                <p>Þú getur <a href="https://www.facebook.com/messages/t/arnorb" class="fbmesslink">skotið að mér skilaboðum á Messenger</a> eða <a href="tel:+3546945400" class="tellink">heyrt í mér í síma 694 5400</a>.</p> 
            </div>
        </b-col>
    </b-row>        
  </div>
</template>

<script>
export default {
    props: {
        isCard: Boolean
    }
}
</script>

<style lang="scss" scoped>
    a {
        &.fbmesslink {
            color: #234874;
        }
        &.tellink {
            color: #85630D;
        }
        &:hover {
            color: #000;
            &.btn {
                color: #fff;
            }
        }
    }
</style>