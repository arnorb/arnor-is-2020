<template>
  <div class="main">
    <b-container fluid class="landing-container">
        <b-container class="align-items-end">
            <b-row>
                <b-col lg="8" class="landing-cta mb-3 mb-md-5 mt-lg-7 mt-4">
                    <h1 class="font-weight-bold">Vilt þú fá frían tíma í ráðgjöf?</h1>
                    <p>Ef þú ert að velta fyrir þér næstu skrefum með vefinn þinn þá hvet ég þig til að skrá þig strax í dag!</p>
                </b-col>
            </b-row>
        </b-container>
        <b-container class="pb-5">
            <b-row>
                <b-col md="4">
                    <p class="font-weight-bold">Hvernig geri ég vefinn minn betri?</p>
                    <p class="font-weight-bold">Á ég að vera með vefverslun?</p>
                    <p class="font-weight-bold">Er ég að gera þetta rétt?</p>
                </b-col>
                <b-col md="8">
                    <div>
                        <p>Eflaust ertu að velta þessu og örugglega mörgu fleiru fyrir þér.  Ef þú skráir þig á póstlistann minn geturðu bókað tíma í fría ráðgjöf án skuldbindinga.</p>
                    </div>

                    <!-- Begin Mailchimp Signup Form -->
                    <div id="mc_embed_signup">
                        <form action="https://arnor.us19.list-manage.com/subscribe/post?u=632e37d669ee7ca6da238f3d0&amp;id=1a58b8b40a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate form-inline needs-validation" target="_blank" novalidate>
                            
                                <div class="mc-field-group form-group">
                                    <label class="sr-only" for="mce-FNAME">Nafn </label>
                                    <input required type="text" value="" name="FNAME" class="required form-control mb-2 mr-sm-2" placeholder="Nafn" id="mce-FNAME">
                                </div>
                        
                                <div class="mc-field-group form-group">
                                    <label class="sr-only" for="mce-EMAIL">Netfang </label>
                                    <input required type="email" value="" name="EMAIL" class="required email form-control mb-2 mr-sm-2" placeholder="Netfang" id="mce-EMAIL">
                                </div>

                                <div id="mce-responses" class="clear">
                                    <div class="response" id="mce-error-response" style="display:none"></div>
                                    <div class="response" id="mce-success-response" style="display:none"></div>
                                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_632e37d669ee7ca6da238f3d0_1a58b8b40a" tabindex="-1" value=""></div>
                                <div class="clear"><input type="submit" value="Skrá mig" name="subscribe" id="mc-embedded-subscribe" class="btn btn-light mb-2"></div>
                            
                        </form>
                    </div>

<!--End mc_embed_signup-->
                </b-col>
            </b-row>
        </b-container>
    </b-container>
  </div>
</template>

<script>

export default {
    layout: 'landingpage'
}
</script>

<style lang="scss">

    .landingpage {
        .landing-container {
            background-color: #234874;
            min-height: calc(100vh - 200px);
        }

        a, p, h1 {
            color: #fff;
        }

        .landing-cta {
            p {
                font-size: 1.5rem;
            }
        }
    }

</style>