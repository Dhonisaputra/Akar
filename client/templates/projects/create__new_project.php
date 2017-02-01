<div class="row">
	<div class="col-md-4">
		<form ng-submit="create_project(this)">
			
			<div class="form-group">
				<label>New Project Name</label>
				<input type="" name="project_name" ng-model="data_project.project_name" class="form-control">
			</div>
			<div class="form-group">
				<label>Deskripsi project</label>
				<textarea name="project_description" ng-model="data_project.project_description" class="form-control"></textarea>
			</div>
			<div class="form-group">
				<button class="btn btn-primary" type="submit"> Buat Project </button>
			</div>

		</form>
	</div>
</div>

<script type="text/javascript">

</script>