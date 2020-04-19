<template>
    <div id="app">
        <sidebar></sidebar>

        <div class="content">

            <div class="row mt-2">

                <div class="col-md-6">
                    <div class="card text-dark bg-light mb-3">
                        <div class="card-header">
                            <b>Recent data</b>
                        </div>
                        <div id="monitoringDatatable" class="card-body">
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card text-dark bg-light mb-3">
                        <div class="card-header">
                            <b>Notifications</b>
                        </div>
                        <div class="card-body">

                            <div class="alert alert-success" role="alert">
                                New processed data received
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="alert alert-info" role="alert">
                                New data shared with you
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="alert alert-info" role="alert">
                                New data shared with you
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="alert alert-danger" role="alert">
                                Data processing failed
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import sidebar from "./components/ui/layout/sidebar";
    export default {
        name: 'App',
        data() {
            return {
            }
        },
        components: {
            sidebar
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    div.content {
        margin-left: 250px;
        padding: 1px 16px;
        height: 100vh;
    }
</style>
